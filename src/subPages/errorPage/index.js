import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa'
const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="  bg-slate-200 h-screen">
            <div className="flex flex-col rounded-lg bg-slate-300 mx-auto w-1/2 items-center h-screen">

                <h1 className=" text-6xl font-semibold animate-bounce m-11">Oops!</h1>
                <p className=" text-lg font-semibold">Sorry, an unexpected error has occurred.</p>
                <div className=" p-3 m-1">
                    <img src="https://media1.giphy.com/media/xTiQygXSRBzi6XLSzS/giphy.gif?cid=ecf05e477iz3kwv1z10ogcbf13puymdyi0q0mfqcz2cdpci5&rid=giphy.gif&ct=g" alt="crying togepi" />
                </div>
                <p className=" text-slate-500 text-base">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to="/t-pokedex">
                    <div className=" bg-slate-400 hover:bg-slate-500 text-center rounded-lg p-4 my-9 w-full text-2xl font-semibold">
                        Back To Home <FaHome className="inline pb-1" />
                    </div>
                </Link>
                <div className=' text-center bg-red-200 border border-red-600 text-red-500 text-base'>
                    If you still encounter this page after clicked Back To Home Please Press <span className=" font-semibold"> CTRL + SHIFT + R</span>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage