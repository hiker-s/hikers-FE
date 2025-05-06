import { useState, useRef, useEffect } from "react";

export function useImageUpload(initialUrls: string[] = []) {
  const [previewUrls, setPreviewUrls] = useState<string[]>(initialUrls);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>(initialUrls);
  const [deletedImageUrls, setDeletedImageUrls] = useState<string[]>([]);
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
    const imageUrlToRemove = previewUrls[index];
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));

    if (initialUrls.includes(imageUrlToRemove)) {
      setDeletedImageUrls((prev) => [...prev, imageUrlToRemove]);
      setExistingImageUrls((prev) => prev.filter((url) => url !== imageUrlToRemove));
    } else {
      setImageFiles((prev) => prev.filter((_, i) => i !== index - initialUrls.length));
      URL.revokeObjectURL(imageUrlToRemove);
    }
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
    existingImageUrls,
    deletedImageUrls,
    fileInputRef,
    handleImageClick,
    handleImageUpload,
    handleRemoveImage,
    setPreviewUrls,
  };
}
