fetch('data.json')
    .then(res => res.json())
    .then(data => {
        const buildsContainer = document.getElementById('builds-container');
        data.forEach(build => {
            const card = document.createElement('div');
            card.style.backgroundColor = '#1e1e1e';
            card.style.padding = '20px';
            card.style.border = '1px solid #333';
            card.style.borderRadius = '8px';
            
            card.innerHTML = `
                <h3 style="color: #00ff88; margin-bottom: 10px;">${build.title}</h3>
                <p><strong>CPU:</strong> ${build.CPU}</p>
                <p><strong>GPU:</strong> ${build.GPU}</p>
                <p><strong>RAM:</strong> ${build.RAM}</p>
                <p style="margin-top: 10px; font-size: 14px;">${build.description}</p>
            `;
            buildsContainer.appendChild(card);
        });
    });

fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15')
    .then(res => res.json())
    .then(data => {
        const dealsContainer = document.getElementById('deals-container');
        const topDeals = data.slice(0, 3);
        
        topDeals.forEach(deal => {
            const card = document.createElement('div');
            card.style.backgroundColor = '#1e1e1e';
            card.style.padding = '20px';
            card.style.border = '1px solid #333';
            card.style.borderRadius = '8px';
            
            card.innerHTML = `
                <h3 style="color: #00ff88; margin-bottom: 10px;">${deal.title}</h3>
                <p><strong>Sale Price:</strong> $${deal.salePrice}</p>
                <p><strong>Normal Price:</strong> <del>$${deal.normalPrice}</del></p>
                <p><strong>Rating:</strong> ${deal.dealRating}/10</p>
                <a href="https://www.cheapshark.com/redirect?dealID=${deal.dealID}" target="_blank" style="display: inline-block; margin-top: 15px; color: #000; background-color: #00ff88; padding: 8px 15px; text-decoration: none; border-radius: 4px; font-weight: bold;">View Deal</a>
            `;
            dealsContainer.appendChild(card);
        });
    });