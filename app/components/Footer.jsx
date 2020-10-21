import React from 'react'

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <small>
                    You can find the code repo on <a href="https://github.com/ntilbe/Quiz-App">Github</a>. Feel free to make any pull requests to improve the application.
                </small>
                <p>Built with <span>&hearts;</span> by <a href="https://github.com/ntilbe">Nicole Tilbe</a></p>
            </footer>
        )
    }
}

export default Footer