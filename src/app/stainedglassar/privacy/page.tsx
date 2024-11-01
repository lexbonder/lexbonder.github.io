import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy - Stained Glass AR',
    icons: {
        icon: '/stainedglassar.ico',
    },
};

export default function page() {
    return (
        <main className="p-5 max-w-screen-lg m-auto">
            <h1 className="pb-5 text-3xl font-bold underline text-center">Privacy Policy</h1>
            <div className="pb-5">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p>This privacy policy describes how your personal information is handled in Stained Glass AR</p>
            </div>
            <div className="pb-5">
                <h2 className="text-2xl font-bold">We collect no personal information using our applications</h2>
                <p>We do not collect, use, save, or have access to any of your personal data in Stained Glass AR</p>
                <p>
                    You might be asked to provide access to your camera, but this is only so you can use the Augmented
                    Reality feature of the app. Nothing is saved or recoreded during that process and we have no access
                    to any actions taken during use.
                </p>
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, feel free to get in touch with us{' '}
                <a
                    href="mailto:lexbonder.dev+SGAR-privacy-policy@gmail.com?subject=Stained Glass AR"
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                    via email
                </a>
                .
            </p>
        </main>
    );
}
