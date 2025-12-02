type Props = {
    onClick?: () => void;
    label?: string;
}

function BrownFilledButton ({ onClick, label = "" }: Props) {
    return (
        <>
            <button 
                onClick={onClick} 
                className="bg-darkbrown rounded-lg px-3 py-1.5 whitespace-nowrap">
                    <p className="font-quicksand font-medium text-background text-base">
                        {label}
                    </p>
            </button>
        </>
    )
}

export default BrownFilledButton;