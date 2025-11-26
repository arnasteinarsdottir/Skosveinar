import ModalButton from "./ModalButton";

function AddChildModal () {
    return (
        <>
            <div className="w-96 h-69 bg-darkbrown rounded-lg border border-background">
                <div className="flex flex-col items-center">
                    <p className="font-cinzel text-background text-2xl pt-10">Skrá nýtt barn</p>
                    {/*Input field area*/}
                    <div className="flex flex-col pt-8">
                        <p className="font-quicksand font-medium text-background text-base pb-0.5">Nafn</p>
                        <input 
                            type="text"
                            placeholder="Nafn barns"
                            className="h-12 w-64 bg-darkbrown rounded-lg border border-background pl-2 text-background italic font-light font-quicksand text-base"
                        />
                    </div>
                    <div className="pt-6">
                        <ModalButton />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddChildModal;