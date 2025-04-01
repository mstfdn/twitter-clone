export const mainMenu = [
    {
      path: '/',
      title: 'Anasayfa',
      icon: {
        active: (
          <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
            <path
              fill="#e7e9ea"
              stroke="#e7e9ea"
              strokeWidth="2"
              d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
            />
          </svg>
        ),
        passive: (
          <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
            <path
              fill="none"
              stroke="#e7e9ea"
              strokeWidth="2"
              d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
            />
          </svg>
        )
      }
    },
    {
      path: '/explore',
      title: 'Keşfet',
      icon: {
        active: (
          <svg 
            viewBox="0 0 24 24" 
            width={26.25} 
            height={26.25} 
            className="block"
            fill="#e7e9ea"
            stroke="#e7e9ea"
            strokeWidth="1"
          >
            <path
              d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
            />
          </svg>
        ),
        passive: (
          <svg 
            viewBox="0 0 24 24" 
            width={26.25} 
            height={26.25} 
            className="block"
            fill="#e7e9ea"
            stroke="none"
            strokeWidth="0"
          >
            <path
              d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
            />
          </svg>
        )
      }
    },
    {
      path: '/notifications',
      title: 'Bildirimler',
      notification: 2,
      icon: {
        active: (
          <svg 
            viewBox="0 0 24 24" 
            width={26.25} 
            height={26.25} 
            className="block"
            fill="#e7e9ea"
            stroke="#e7e9ea" 
            strokeWidth="2"
          >
            <path
              d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
            />
          </svg>
        ),
        passive: (
          <svg 
            viewBox="0 0 24 24" 
            width={26.25} 
            height={26.25} 
            className="block"
            fill="none"
            stroke="#e7e9ea" 
            strokeWidth="2"
          >
            <path
              d="M11.996 2c-4.062 0-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958C19.48 5.017 16.054 2 11.996 2zM9.171 18h5.658c-.412 1.165-1.523 2-2.829 2s-2.417-.835-2.829-2z"
            />
          </svg>
        )
      }
    },
    {
        path: '/messages',
        title: 'Mesajlar',
        icon: {
          active: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="#e7e9ea"
              
            >
              <path
                d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
              />
            </svg>
          ),
          passive: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="none"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M1.998 4.499c0-.828.671-1.499 1.5-1.499h17c.828 0 1.5.671 1.5 1.499v2.858l-10 4.545-10-4.547V4.499zm0 5.053V19.5c0 .828.671 1.5 1.5 1.5h17c.828 0 1.5-.672 1.5-1.5V9.554l-10 4.545-10-4.547z"
              />
            </svg>
          )
        }
      },
      {
        path: '/lists',
        title: 'Listeler',
        icon: {
          active: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="#e7e9ea"
              
            >
              <path
                d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"
              />
            </svg>
          ),
          passive: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="none"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM16 14H8v-2h8v2zm0-4H8V8h8v2z"
              />
            </svg>
          )
        }
      },
      {
        path: '/bookmarks',
        title: 'Bookmarks',
        icon: {
          active: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="#e7e9ea"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"
              />
            </svg>
          ),
          passive: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="none"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"
              />
            </svg>
          )
        }
      },
      {
        path: '/approved',
        title: 'Onaylı Kuruluşlar',
        icon: {
          active: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="none"
              stroke="#e7e9ea" 
              strokeWidth="2"
              
            >
              <path
                d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"
              />
            </svg>
          ),
          passive: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="#e7e9ea"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M7.323 2h11.443l-3 5h6.648L6.586 22.83 7.847 14H2.523l4.8-12zm1.354 2l-3.2 8h4.676l-.739 5.17L17.586 9h-5.352l3-5H8.677z"
              />
            </svg>
          )
        }
      },
      {
        path: '/profile',
        title: 'Profil',
        icon: {
          active: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="#e7e9ea"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
              />
            </svg>
          ),
          passive: (
            <svg 
              viewBox="0 0 24 24" 
              width={26.25} 
              height={26.25} 
              className="block"
              fill="none"
              stroke="#e7e9ea" 
              strokeWidth="2"
            >
              <path
                d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
              />
            </svg>
          )
        }
      }
  ];