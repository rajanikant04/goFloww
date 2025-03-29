'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { getAurinkoAuthorizationUrl } from '@/lib/aurinko'

export const LinkAccountButton = () => {
    return (
        <Button onClick={async() => {
            const authUrl = await getAurinkoAuthorizationUrl('Google')
            console.log(authUrl);
        }}>
            Link Account
        </Button>
    )
}