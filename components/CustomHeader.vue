<template>
  <div>
    <nav class="navbar">
      <ul class="navbar-nav">
        <li class="logo">
          <!-- https://fontawesome.com/v5.15/icons/angle-double-right?style=solid -->
          <nuxt-link to="/view" class="nav-link">
            <span class="link-text">content</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="angle-double-right"
              class="svg-inline--fa fa-angle-double-right fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  class="fa-secondary"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                ></path>
                <path
                  fill="currentColor"
                  class="fa-primary"
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"
                ></path>
              </g>
            </svg>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <!-- https://fontawesome.com/v5.15/icons/home?style=solid -->
          <nuxt-link to="/" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
            <span class="link-text">Home</span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="/view" class="nav-link">
            <!-- https://fontawesome.com/v5.15/icons/user-circle?style=solid -->
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user-circle"
              class="svg-inline--fa fa-user-circle fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                fill="currentColor"
                d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
              ></path>
            </svg>
            <span class="link-text">Andreas Lind</span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">
            <!-- https://fontawesome.com/v5.15/icons/user-astronaut?style=solid -->
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="book"
              class="svg-inline--fa fa-book fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"
              ></path>
            </svg>
            <span class="link-text">Projects</span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">
            <!-- https://fontawesome.com/v5.15/icons/space-shuttle?style=solid -->
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="envelope"
              class="svg-inline--fa fa-envelope fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"
              ></path>
            </svg>
            <span class="link-text">Contact</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
</script>
<style scoped>
.navbar {
  position: fixed;
  background-color: var(--bg-primary);
  transition: width 200ms ease;
}
.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.nav-item {
  width: 100%;
}
.nav-item:last-child {
  margin-top: auto;
}
.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
}
.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background-color: var(--bg-secondary);
}
.link-text {
  display: none;
  margin-left: 1rem;
}
.nav-link svg {
  min-width: 2rem;
  margin: 0 1.5rem;
}
.fa-primary {
  color: #ff7eee;
}
.fa-secondary {
  color: #c9b4b4;
}
.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}
.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background-color: var(--bg-secondary);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}
.logo svg {
  transform: rotate(0deg);
  transition: transform var(--transition-speed);
}
.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

/* small screens */
@media only screen and (max-width: 600px) {
  main {
    margin: 0;
  }
  .navbar {
    bottom: 0;
    width: 100vh;
    height: 5rem;
  }
  .logo {
    display: none;
  }
  .navbar-nav {
    flex-direction: row;
  }
  .nav-link {
    justify-content: center;
  }
}
/* large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
  }
  .navbar:hover {
    width: 16rem;
  }
  .navbar:hover .link-text {
    display: inline;
    transition: opacity var(--transition-speed);
  }
}
</style>
