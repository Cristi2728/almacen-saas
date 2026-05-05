// app/layout.tsx
import React from 'react';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
        <head>
            <title>My Next.js App</title>
        </head>
        <body>{children}</body>
        </html>
    );
};

export default RootLayout;
