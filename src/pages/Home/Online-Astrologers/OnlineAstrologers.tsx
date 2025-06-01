import { AstrologerCard } from "../../../components/index";

function OnlineAstrologers(){
    return (
        <section className="my-10 bg-(--color-header-background) border-1 border-yellow-300 py-26">
            
            <h1 className="text-3xl text-yellow-300  font-bold flex flex-row justify-center underline">Online Astrologers</h1>
            <div className="flex flex-row justify-center gap-10 flex-wrap mt-10">
            {[...Array(6)].map(()=> (
                <span className="shrink-0">
                    <AstrologerCard  />
                </span>))}
            </div>
        </section>
    )
}

export default OnlineAstrologers; 