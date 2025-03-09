document.addEventListener('DOMContentLoaded', function() {
    // Sample data for dynamic content
    const teamsData = [
        {
            id: 1,
            name: "Team Valor",
            game: "lol",
            members: 5,
            achievements: "2x Regional Champions",
            image: "https://via.placeholder.com/300x180/1e1e1e/7289da?text=Team+Valor+LoL",
            wins: 78,
            losses: 22,
            winrate: "78%"
        },
        {
            id: 2,
            name: "Nexus Guardians",
            game: "valorant",
            members: 5,
            achievements: "Current Season Winners",
            image: "https://via.placeholder.com/300x180/1e1e1e/ffa500?text=Nexus+Guardians+Valorant",
            wins: 65,
            losses: 35,
            winrate: "65%"
        },
        {
            id: 3,
            name: "PUBG Legion",
            game: "pubg",
            members: 4,
            achievements: "3x Survival Masters",
            image: "https://via.placeholder.com/300x180/1e1e1e/00aa66?text=PUBG+Legion",
            wins: 58,
            losses: 42,
            winrate: "58%"
        },
        {
            id: 4,
            name: "Shadow Strike",
            game: "lol",
            members: 5,
            achievements: "Rookie of the Year 2023",
            image: "https://via.placeholder.com/300x180/1e1e1e/7289da?text=Shadow+Strike+LoL",
            wins: 62,
            losses: 38,
            winrate: "62%"
        },
        {
            id: 5,
            name: "Vanguard",
            game: "valorant",
            members: 5,
            achievements: "International Finalists",
            image: "https://via.placeholder.com/300x180/1e1e1e/ffa500?text=Vanguard+Valorant",
            wins: 71,
            losses: 29,
            winrate: "71%"
        },
        {
            id: 6,
            name: "Battle Squad",
            game: "pubg",
            members: 4,
            achievements: "2x Erangel Masters",
            image: "https://via.placeholder.com/300x180/1e1e1e/00aa66?text=Battle+Squad+PUBG",
            wins: 55,
            losses: 45,
            winrate: "55%"
        }
    ];

    const tournamentsData = [
        {
            id: 1,
            name: "Diamond Cup Season 4",
            game: "lol",
            date: "June 15-17, 2023",
            prize: "$50,000",
            teams: 16,
            image: "https://via.placeholder.com/350x180/1e1e1e/7289da?text=Diamond+Cup+LoL",
            progress: 65
        },
        {
            id: 2,
            name: "Valorant Invitational",
            game: "valorant",
            date: "July 20-22, 2023",
            prize: "$75,000",
            teams: 12,
            image: "https://via.placeholder.com/350x180/1e1e1e/ffa500?text=Valorant+Invitational",
            progress: 45
        },
        {
            id: 3,
            name: "PUBG Survival Games",
            game: "pubg",
            date: "August 5-7, 2023",
            prize: "$100,000",
            teams: 24,
            image: "https://via.placeholder.com/350x180/1e1e1e/00aa66?text=PUBG+Survival+Games",
            progress: 30
        },
        {
            id: 4,
            name: "Rift Rumble",
            game: "lol",
            date: "September 1-3, 2023",
            prize: "$40,000",
            teams: 8,
            image: "https://via.placeholder.com/350x180/1e1e1e/7289da?text=Rift+Rumble+LoL",
            progress: 20
        },
        {
            id: 5,
            name: "Valorant Champions Tour",
            game: "valorant",
            date: "October 13-15, 2023",
            prize: "$150,000",
            teams: 16,
            image: "https://via.placeholder.com/350x180/1e1e1e/ffa500?text=Valorant+Champions+Tour",
            progress: 10
        },
        {
            id: 6,
            name: "PUBG World Championship",
            game: "pubg",
            date: "November 10-12, 2023",
            prize: "$250,000",
            teams: 32,
            image: "https://via.placeholder.com/350x180/1e1e1e/00aa66?text=PUBG+World+Championship",
            progress: 5
        }
    ];

    const newsData = [
        {
            id: 1,
            title: "New League of Legends Patch Balances Meta",
            game: "lol",
            date: "May 20, 2023",
            content: "Riot Games has released patch 13.10 which significantly impacts the current meta...",
            image: "https://via.placeholder.com/350x200/1e1e1e/7289da?text=LoL+Patch+News"
        },
        {
            id: 2,
            title: "Valorant Agent Renata Gets Major Changes",
            game: "valorant",
            date: "May 18, 2023",
            content: "The latest Valorant update has made substantial changes to Renata's kit...",
            image: "https://via.placeholder.com/350x200/1e1e1e/ffa500?text=Valorant+Agent+News"
        },
        {
            id: 3,
            title: "PUBG Mobile Transition to PUBG: NEW STATE",
            game: "pubg",
            date: "May 15, 2023",
            content: "Krafton has announced plans to transition PUBG Mobile players to their new title...",
            image: "https://via.placeholder.com/350x200/1e1e1e/00aa66?text=PUBG+Transition+News"
        },
        {
            id: 4,
            title: "Team Valor Signs Rising Star Player",
            game: "lol",
            date: "May 12, 2023",
            content: "Team Valor has announced the signing of mid-laner Li 'Starfall' Chen...",
            image: "https://via.placeholder.com/350x200/1e1e1e/7289da?text=Team+Valor+News"
        },
        {
            id: 5,
            title: "Valorant Champions Tour Format Revealed",
            game: "valorant",
            date: "May 10, 2023",
            content: "The format for the upcoming Valorant Champions Tour has been officially announced...",
            image: "https://via.placeholder.com/350x200/1e1e1e/ffa500?text=Valorant+Champions+News"
        },
        {
            id: 6,
            title: "PUBG World Championship Dates Announced",
            game: "pubg",
            date: "May 5, 2023",
            content: "The much-anticipated PUBG World Championship will take place November 10-12...",
            image: "https://via.placeholder.com/350x200/1e1e1e/00aa66?text=PUBG+WC+News"
        }
    ];

    const forumPostsData = [
        {
            id: 1,
            author: "EzrealMaster",
            time: "2 hours ago",
            content: "What do you think about the new LoL patch? I think they nerfed Ezreal way too hard. Anyone agree?"
        },
        {
            id: 2,
            author: "ValorantFan99",
            time: "4 hours ago",
            content: "Renata changes are OP! How is this not getting hotfixed? I can't believe they buffed her so much."
        },
        {
            id: 3,
            author: "PUBGProPlayer",
            time: "6 hours ago",
            content: "PUBG NEW STATE looks interesting but I'm not ready to leave Mobile. Will they cross-play?"
        },
        {
            id: 4,
            author: "ShadowStrikeFan",
            time: "8 hours ago",
            content: "Congrats to Shadow Strike for signing Starfall! They're going to dominate the mid lane now."
        },
        {
            id: 5,
            author: "VCTObserver",
            time: "10 hours ago",
            content: "The Valorant Champions Tour format looks exciting! Can't wait to see international competition."
        },
        {
            id: 6,
            author: "PUBGCollector",
            time: "12 hours ago",
            content: "PUBG World Championship dates are finally here! Anyone planning to watch? I'll be there with my team jersey!"
        }
    ];

    const streamsData = [
        {
            id: 1,
            streamer: "Gwapong Maasim",
            game: "lol",
            viewers: "2.4k",
            title: "Climbing Diamond with New Meta",
            image: "img/Player1.jpg",
            avatar: "avatar/asd.png"
        },
        {
            id: 2,
            streamer: "Goatnigga",
            game: "valorant",
            viewers: "1.8k",
            title: "Ranking Up with Renata",
            image: "img/Player2.jpg",
            avatar: "avatar/dfb.png"
        },
        {
            id: 3,
            streamer: "GaeFrenchNigga",
            game: "pubg",
            viewers: "3.1k",
            title: "Duo Queue on Erangel",
            image: "img/Player3.jpg",
            avatar: "avatar/Faker.jpg"
        },
        {
            id: 4,
            streamer: "AlienAhhFace",
            game: "lol",
            viewers: "1.5k",
            title: "Ezreal Masterclass",
            image: "img/Player4.jpg",
            avatar: "avatar/fbv.png"
        },
        {
            id: 5,
            streamer: "ValorantVibes",
            game: "valorant",
            viewers: "2.2k",
            title: "Valorant Fun Moments",
            image: "img/Player5.jpg",
            avatar: "avatar/xzc.png"
        },
        {
            id: 6,
            streamer: "PUBGCollector",
            game: "pubg",
            viewers: "2.7k",
            title: "Loot Hunting on Miramar",
            image: "img/Player6.jpg",
            avatar: "avatar/zsc.png"
        }
    ];

    // Function to render teams based on filter
    function renderTeams(filter = 'all') {
        const teamGrid = document.querySelector('.team-grid');
        teamGrid.innerHTML = '';

        const filteredTeams = filter === 'all' 
            ? teamsData 
            : teamsData.filter(team => team.game === filter);

        filteredTeams.forEach(team => {
            const teamCard = document.createElement('div');
            teamCard.className = 'team-card';
            teamCard.innerHTML = `
                <img src="${team.image}" alt="${team.name}">
                <div class="team-info">
                    <h3>${team.name}</h3>
                    <p>${team.achievements}</p>
                    <p><span class="game-icon">${getGameIcon(team.game)}</span> ${getGameName(team.game)}</p>
                    <div class="team-stats">
                        <div class="stat">
                            <div class="stat-value">${team.wins}</div>
                            <div class="stat-label">Wins</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${team.losses}</div>
                            <div class="stat-label">Losses</div>
                        </div>
                        <div class="stat">
                            <div class="stat-value">${team.winrate}</div>
                            <div class="stat-label">Win Rate</div>
                        </div>
                    </div>
                </div>
            `;
            teamGrid.appendChild(teamCard);
        });
    }

    // Function to render tournaments
    function renderTournaments() {
        const tournamentGrid = document.querySelector('.tournament-grid');
        tournamentGrid.innerHTML = '';

        tournamentsData.forEach(tournament => {
            const tournamentCard = document.createElement('div');
            tournamentCard.className = 'tournament-card';
            tournamentCard.innerHTML = `
                <img src="${tournament.image}" alt="${tournament.name}">
                <div class="tournament-info">
                    <h3>${tournament.name}</h3>
                    <div class="tournament-date">
                        <i class="far fa-calendar-alt"></i> ${tournament.date}
                    </div>
                    <div class="prize-pool">
                        <i class="fas fa-trophy"></i> Prize Pool: $${tournament.prize}
                    </div>
                    <div class="tournament-progress">
                        <div class="progress-bar" style="width: ${tournament.progress}%"></div>
                    </div>
                    <div class="teams-list">
                        ${Array(tournament.teams).fill().map((_, i) => 
                            `<div class="team-icon">${i + 1}</div>`
                        ).slice(0, 6).join('')}
                    </div>
                    <a href="#" class="register-btn">Register Now</a>
                </div>
            `;
            tournamentGrid.appendChild(tournamentCard);
        });
    }

    // Function to render news articles
    function renderNews() {
        const newsGrid = document.querySelector('.news-grid');
        newsGrid.innerHTML = '';

        newsData.forEach(news => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <span class="news-date">${news.date}</span>
                    <p>${news.content}</p>
                    <a href="#" class="read-more">Read More</a>
                </div>
            `;
            newsGrid.appendChild(newsCard);
        });
    }

    // Function to render forum posts
    function renderForumPosts() {
        const forumPostsContainer = document.querySelector('.forum-posts');
        forumPostsContainer.innerHTML = '';

        forumPostsData.forEach(post => {
            const forumPost = document.createElement('div');
            forumPost.className = 'forum-post';
            forumPost.innerHTML = `
                <div class="forum-post-header">
                    <span class="forum-post-author">${post.author}</span>
                    <span class="forum-post-time">${post.time}</span>
                </div>
                <div class="forum-post-content">
                    ${post.content}
                </div>
            `;
            forumPostsContainer.appendChild(forumPost);
        });
    }

    // Function to render streams
    function renderStreams() {
        const streamGrid = document.querySelector('.stream-grid');
        streamGrid.innerHTML = '';

        streamsData.forEach(stream => {
            const streamCard = document.createElement('div');
            streamCard.className = 'stream-card';
            streamCard.innerHTML = `
                <img src="${stream.image}" alt="${stream.title}">
                <div class="stream-info">
                    <div class="streamer-name">
                        <img src="${stream.avatar}" alt="${stream.streamer} avatar" class="streamer-avatar">
                        <h3>${stream.streamer}</h3>
                    </div>
                    <p class="stream-game">${getGameName(stream.game)}</p>
                    <p class="stream-viewers"><i class="fas fa-eye"></i> ${stream.viewers} watching</p>
                    <a href="#" class="watch-btn">Watch Live</a>
                </div>
            `;
            streamGrid.appendChild(streamCard);
        });
    }

    // Helper function to get game icon
    function getGameIcon(game) {
        switch(game) {
            case 'lol': return '<i class="fab fa-league-of-legends"></i>';
            case 'valorant': return '<i class="fas fa-gamepad"></i>';
            case 'pubg': return '<i class="fab fa-pubg"></i>';
            default: return '';
        }
    }

    // Helper function to get game name
    function getGameName(game) {
        switch(game) {
            case 'lol': return 'League of Legends';
            case 'valorant': return 'Valorant';
            case 'pubg': return 'PUBG';
            default: return '';
        }
    }

    // Event listeners for team filters
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get game filter
            const gameFilter = this.getAttribute('data-game');
            
            // Render teams based on filter
            renderTeams(gameFilter);
        });
    });

    // Initial renders
    renderTeams();
    renderTournaments();
    renderNews();
    renderForumPosts();
    renderStreams();

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Update active navigation link
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        });
    });
});