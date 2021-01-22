<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta content="IE=edge" http-equiv="X-UA-Compatible">
        <meta content="width=device-width,initial-scale=1" name="viewport">
        <meta name="description" content="Denver web developer and designer for hire. Affordable and professional local development with the most current design standards and best practices." />
        <meta content="author" name="Sumner Erhard">
        <meta name="google" content="notranslate" />
        <meta name="msapplication-tap-highlight" content="no">
        <link href="assets/favicon.ico" rel="icon">
        <title>Sumner Erhard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <script>
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.querySelector('html').classList.add('dark')
            } else {
                document.querySelector('html').classList.remove('dark')
            }
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'

            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'

            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        </script>
    </head>

    <body class="bg-page text-default font-default">
        @include( 'header' )
        @yield( 'content' )
        @include( 'footer' )
    </body>
    <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
</html>
