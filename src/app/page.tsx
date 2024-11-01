export default function Home() {
    return (
        <div className="p-5 max-w-screen-lg m-auto">
            <main className="pb-8">
                <h1 className="pb-5 text-3xl font-bold underline text-center">Alex Bonder</h1>
                <div className="pb-5">
                    <h2 className="text-2xl font-bold">Hello there!</h2>
                    <p>
                        This is the home page for what will soon be a portfolio, or digital resume... something like
                        that. It&apos;ll grow into itself. For now its just holding some mandatory endpoints for the iOS
                        app I built.
                    </p>
                    <p>
                        As to not waste an opportunity to show off some work, here&apos;s some fun links. All projects
                        are works in progress. (Aren&apos;nrbt they always?)
                    </p>
                </div>
                <div className="pb-5">
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <h3 className="text-xl font-bold">Laces</h3>
                    <p>
                        <a
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href="https://lexbonder.github.io/laces"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live
                        </a>{' '}
                        |{' '}
                        <a
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href="https://www.github.com/lexbonder/laces"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                    <h3 className="text-xl font-bold">Step to the Beat</h3>
                    <p>
                        <a
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href="https://step-to-the-beat.firebaseapp.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Live
                        </a>{' '}
                        |{' '}
                        <a
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href="https://www.github.com/lexbonder/step-to-the-beat"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                    <h3 className="text-xl font-bold">
                        Stained Glass AR <span className="text-base font-normal">(Coming Soon to the App Store)</span>
                    </h3>
                    <p>
                        <a
                            className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href="https://www.github.com/lexbonder/bethorwindows"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                </div>
                <h2 className="text-2xl font-bold">Contact Me</h2>
                <p>Networking? Questions? Comments? Lets connect!</p>
                <p>
                    <a
                        href="mailto:lexbonder.dev+portfolio@gmail.com?subject=Contact from portfolio"
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                        Email
                    </a>
                </p>
                <p>
                    <a
                        href="https://www.linkedin.com/in/lexbonder"
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                        LinkedIn
                    </a>
                </p>
                <p>
                    <a
                        href="https://www.github.com/lexbonder"
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    >
                        GitHub
                    </a>
                </p>
            </main>
            <footer>
                <a
                    className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                    href="https://www.flaticon.com/free-icons/ab-testing"
                    title="ab testing icons"
                >
                    Ab testing icons created by Freepik - Flaticon
                </a>
            </footer>
        </div>
    );
}
