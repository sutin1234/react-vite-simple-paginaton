const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center">
                {pageNumbers.map((number) => (
                    <li key={number} className="p-1">
                        <a onClick={() => paginate(number)} href="!#" className="text-bold text-red-600">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}
export default Pagination;