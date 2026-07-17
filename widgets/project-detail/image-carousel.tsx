'use client'

import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Pagination} from "swiper/modules";
import {type ProjectImage} from "@entities/project";
import {ImageWithSkeleton} from "@shared/ui/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ImageCarouselProps = {
    images: ProjectImage[]
    alt: string
}

export const ImageCarousel = ({images, alt}: ImageCarouselProps) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    return (
        <>
            <Swiper
                modules={[FreeMode, Navigation, Pagination]}
                navigation
                freeMode
                pagination={{clickable: true}}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    640: {slidesPerView: 2},
                    1024: {slidesPerView: 3},
                }}
                className="mt-8 w-full overflow-hidden"
            >
                {images.map(({id, url}) =>
                    <SwiperSlide key={id}>
                        <button
                            type="button"
                            className="block w-full cursor-zoom-in"
                            onClick={() => setPreviewUrl(url)}
                            aria-label={`${alt} 이미지 미리보기`}
                        >
                            <ImageWithSkeleton
                                fill
                                className="aspect-[3/4] w-full rounded-xl bg-gray-50 sm:aspect-[4/3]"
                                imageClassName="object-contain"
                                src={url}
                                alt={alt}
                            />
                        </button>
                    </SwiperSlide>
                )}
            </Swiper>

            {previewUrl && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
                    <button
                        type="button"
                        className="absolute inset-0 cursor-zoom-out"
                        onClick={() => setPreviewUrl(null)}
                        aria-label="미리보기 닫기"
                    />
                    <div className="relative z-10 h-[85dvh] w-full max-w-5xl">
                        <button
                            type="button"
                            className="absolute right-0 top-0 z-20 flex size-10 items-center justify-center rounded-full bg-background text-foreground shadow"
                            onClick={() => setPreviewUrl(null)}
                            aria-label="미리보기 닫기"
                        >
                            X
                        </button>
                        <ImageWithSkeleton
                            fill
                            className="h-full w-full rounded-xl bg-black"
                            imageClassName="object-contain"
                            src={previewUrl}
                            alt={alt}
                        />
                    </div>
                </div>
            )}
        </>
    )
}
