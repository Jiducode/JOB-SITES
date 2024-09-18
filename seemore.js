

document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 4; // Number of items per page
    const jobCards = document.querySelectorAll('.job-card');
    const totalItems = jobCards.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    let currentPage = 1;

    function showPage(page) {
        jobCards.forEach((card, index) => {
            card.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
        });

        document.getElementById('prevBtn').disabled = page === 1;
        document.getElementById('nextBtn').disabled = page === totalPages;
        
        // Update page numbers
        const pageNumbers = document.getElementById('pageNumbers');
        pageNumbers.innerHTML = '';
        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('button');
            pageNumber.textContent = i;
            pageNumber.className = 'page-btn';
            if (i === page) {
                pageNumber.style.backgroundColor = '#0056b3';
                pageNumber.style.color = 'white';
            }
            pageNumber.addEventListener('click', () => showPage(i));
            pageNumbers.appendChild(pageNumber);
        }
    }

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Initial page load
    showPage(currentPage);
});
