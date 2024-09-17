import "./notFound.css"

const NotFound = () => {
    return (
        <div className="container">
            <div className="box">
                <iframe className="gif" src="https://giphy.com/embed/vwI4mYEHP8k0w" title="Gif de error404" />
                <p className="NFound">404 Not Found</p>
            </div>
        </div>
    );
}

export default NotFound;
