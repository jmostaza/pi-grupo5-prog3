import React from "react";
import "./Loader.css"

const Loader = () => {
    return (
        <div>
            <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#B60E10" stroke="#B60E10" stroke-width="17" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#B60E10" stroke="#B60E10" stroke-width="17" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#B60E10" stroke="#B60E10" stroke-width="17" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="1.8" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
        </div>
    )
}

export default Loader;