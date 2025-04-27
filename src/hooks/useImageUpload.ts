import { useState, useRef, useEffect } from "react";

export function useImageUpload(initialUrls: string[] = []) {
  const [previewUrls, setPreviewUrls] = useState<string[]>(initialUrls);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImageFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
    if (previewUrls.length + newImageFiles.length > 3) {
      alert("이미지는 최대 3장까지만 업로드할 수 있습니다.");
      return;
    }

    const newPreviewUrls = newImageFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    setImageFiles((prev) => [...prev, ...newImageFiles]);
  };

  const handleRemoveImage = (index: number) => {
    setPreviewUrls((prev) => {
      const newUrls = prev.filter((_, i) => i !== index);
      URL.revokeObjectURL(prev[index]);
      return newUrls;
    });
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => {
        if (url.startsWith("blob:")) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [previewUrls]);

  return {
    previewUrls,
    imageFiles,
    fileInputRef,
    handleImageClick,
    handleImageUpload,
    handleRemoveImage,
    setPreviewUrls,
  };
}
