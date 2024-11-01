import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Support - Stained Glass AR',
    icons: {
        icon: '/stainedglassar.ico',
    },
};

export default function page() {
    return (
        <main className="p-5 max-w-screen-lg m-auto">
            <h1 className="pb-5 text-3xl font-bold underline text-center">Support</h1>
            <h2 className="text-2xl font-bold">Troubleshooting</h2>
            <p>If something goes wrong while using the app try these steps:</p>
            <ul className="list-disc list-inside pb-5">
                <li>Close and reopen the app</li>
                <li>Uninstall and reinstall the app</li>
                <li>
                    If that doesnt work, contact us{' '}
                    <a
                        href="mailto:lexbonder.dev+SGAR-privacy-policy@gmail.com?subject=Stained Glass AR"
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                        via email
                    </a>
                    .
                </li>
            </ul>
        </main>
    );
}
