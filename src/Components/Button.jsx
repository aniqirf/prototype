import { CgSpinnerTwoAlt } from "react-icons/cg";

const Button = ({
    children,
    theme,
    className,
    isLoad,
    ...props
}) => {
    var style = 'border-2 border-[#6c2be2] text-[#6c2be2] hover:bg-[#6c2be2]/10';
    if (theme === 'solid') {
        style = 'border-2 border-[#6c2be2] text-white bg-[#6c2be2] hover:bg-[#6c2be2]/90';
    } else if (theme === 'danger') {
        style = 'border-2 border-red-500 text-white bg-red-500 hover:bg-red-600';
    }
    return (
        <div className={`max-w-sm ${isLoad ? 'animate-pulse' : ''}`}>
            <button className={`flex text-sm items-center justify-center align-middle mx-1 my-1 hover:-translate-y-1 active:scale-95 transition-all ease-in-out duration-75 font-semibold tracking-wider px-6 py-2 rounded-lg ${style} ${className}`} {...props}>
                {isLoad ? (
                    <>
                        <CgSpinnerTwoAlt className="animate-spin text-2xl" />
                    </>
                ) : (
                    children
                )}
            </button>
        </div>
    )
}

export default Button
