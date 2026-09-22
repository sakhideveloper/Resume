import React, { createContext, useContext, useState, useEffect } from 'react';
import { contactInfo } from '../data/portfolioData';

export type AvatarSize = 'medium' | 'large' | 'xl';

interface AvatarContextType {
  avatarUrl: string;
  avatarSize: AvatarSize;
  setAvatarSize: (size: AvatarSize) => void;
  uploadCustomAvatar: (file: File) => Promise<void>;
  resetAvatar: () => void;
  isCustom: boolean;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

const DEFAULT_AVATAR = contactInfo.avatarUrl || '/profile.jpg';
const STORAGE_KEY = 'sakhawat_custom_avatar';
const SIZE_STORAGE_KEY = 'sakhawat_avatar_size';

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved || DEFAULT_AVATAR;
    } catch {
      return DEFAULT_AVATAR;
    }
  });

  const [avatarSize, setAvatarSizeState] = useState<AvatarSize>(() => {
    try {
      const saved = localStorage.getItem(SIZE_STORAGE_KEY) as AvatarSize | null;
      return saved || 'large';
    } catch {
      return 'large';
    }
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      return Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      return false;
    }
  });

  const setAvatarSize = (size: AvatarSize) => {
    setAvatarSizeState(size);
    try {
      localStorage.setItem(SIZE_STORAGE_KEY, size);
    } catch (e) {
      console.warn('Failed to save avatar size:', e);
    }
  };

  const uploadCustomAvatar = (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (!result) {
          resolve();
          return;
        }

        const img = new Image();
        img.onload = () => {
          // Optimize dimensions to keep under localStorage quota while maintaining high resolution
          const maxDim = 1200;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');

          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            const optimized = canvas.toDataURL('image/jpeg', 0.94);
            try {
              localStorage.setItem(STORAGE_KEY, optimized);
            } catch (err) {
              console.warn('Failed to save avatar to localStorage:', err);
            }
            setAvatarUrl(optimized);
            setIsCustom(true);
            resolve();
          } else {
            try {
              localStorage.setItem(STORAGE_KEY, result);
            } catch (err) {
              console.warn('Failed to save avatar to localStorage:', err);
            }
            setAvatarUrl(result);
            setIsCustom(true);
            resolve();
          }
        };

        img.onerror = () => {
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch (err) {
            console.warn('Failed to save avatar to localStorage:', err);
          }
          setAvatarUrl(result);
          setIsCustom(true);
          resolve();
        };

        img.src = result;
      };

      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const resetAvatar = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to remove custom avatar:', e);
    }
    setAvatarUrl(DEFAULT_AVATAR);
    setIsCustom(false);
  };

  return (
    <AvatarContext.Provider
      value={{
        avatarUrl,
        avatarSize,
        setAvatarSize,
        uploadCustomAvatar,
        resetAvatar,
        isCustom,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};
