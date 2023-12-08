import Cards from "./Cards";
const MainContent = ({searchTerm}) => {
    return (
        <main className="p-[48px]">
            <Cards searchTerm = {searchTerm}/>
        </main>
    )
}
export default MainContent;