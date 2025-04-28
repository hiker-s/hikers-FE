import { useState, useRef, useEffect } from "react";

export function useImageUpload(initialUrls: string[] = []) {
  const [previewUrls, setPreviewUrls] = useState<string[]>(initialUrls);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [existingImageUrls, setExistingImageUrls] = useState<string[]>(initialUrls);
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
      if (prev[index].startsWith("blob:")) {
        URL.revokeObjectURL(prev[index]);
      }
      return newUrls;
    });

    // 기존 이미지인 경우 existingImageUrls에서도 제거
    if (index < existingImageUrls.length) {
      setExistingImageUrls((prev) => prev.filter((_, i) => i !== index));
    } else {
      // 새로 추가된 이미지인 경우 imageFiles에서 제거
      setImageFiles((prev) => prev.filter((_, i) => i !== index - existingImageUrls.length));
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

  // 기존 이미지 URL과 새로 추가된 이미지 파일을 합친 배열 반환
  const allImages = [...existingImageUrls, ...imageFiles];
  // console.log("allImages:", allImages);

  return {
    previewUrls,
    imageFiles,
    existingImageUrls,
    allImages,
    fileInputRef,
    handleImageClick,
    handleImageUpload,
    handleRemoveImage,
    setPreviewUrls,
  };
}
