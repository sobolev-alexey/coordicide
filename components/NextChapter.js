import React from 'react'
import Link from 'next/link'
import Button from './Button'

export default ({ page, chapterNumber }) => (
    <Link prefetch href={`/${page}`}>
        <Button
            className="large primary"
            icon="book"
        >
            Read Chapter {chapterNumber}
        </Button>
    </Link>
)