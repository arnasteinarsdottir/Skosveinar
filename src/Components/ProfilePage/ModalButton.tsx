type Props = {
    onClick?: () => void;
}

function ModalButton ({onClick}: Props) {
    return (
        <>
            <button className="border border-background rounded-lg px-3 py-1.5 w-25" onClick={onClick}>
                <p className="font-quicksand font-medium text-background text-base">Skrá barn</p>
            </button>
        </>
    )
}

export default ModalButton;