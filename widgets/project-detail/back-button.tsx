'use client'

import {useRouter} from 'next/navigation'
import {Button} from '@shared/ui/button'

export function BackButton() {
    const router = useRouter()

    function handleBack() {
        if (window.history.length > 1) {
            router.back()
            return
        }

        router.push('/')
    }

    return (
        <Button type="button" variant="ghost" size="sm" className={"font-bold"} onClick={handleBack}>
            ← 뒤로가기
        </Button>
    )
}
