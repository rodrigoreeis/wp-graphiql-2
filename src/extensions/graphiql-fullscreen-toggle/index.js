const { hooks } = window.wpGraphiQL;
import "./index.scss";

const FullScreenToggleButton = () => {
    return (
        <button 
            id='graphiql-fullscreen-toggle'
            class="toolbar-button" 
            title="Toggle Full Screen" 
            onClick={() => { document.body.classList.toggle("graphiql-fullscreen");}}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="full-screen-icon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304"/></svg>
        </button>
    )
}

/**
 * Hook into the GraphiQL Toolbar to add the button to toggle fullscreen mode.
 */
hooks.addFilter( "graphiql_toolbar_after_buttons", "graphiql-extension", (res, props) => {
        res.push( <FullScreenToggleButton /> )
        return res
    }
);