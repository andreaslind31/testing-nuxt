<template>
  <div>
    <main class='home'>
        <div class="about__me">
            <img src="~/assets/jpg/IMG_3355.JPG" alt="me" width="70%" />
            <h1><nuxt-link to="/projectlist" class="reversed_link"> Andreas Lind </nuxt-link></h1>
            <h3>.NET student</h3>
            <p>A well-structured developer student with years of experience <br>from the Swedish Armed Forces.</p>
            <div class="skills_projects_link">
                <nuxt-link to="/projectlist"> Projects | Skills </nuxt-link>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
main .home {
    width: 100%;
    height: 100vh;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.home > .about__me {
    text-align: center;
    width: 80%;
    line-height: 1.5rem;
}
.home > .about__me > h1 {
    margin: 20px 0 0;
    font-size: 36px;
    font-weight: 900;
    color: #DB5461;
}
.home > .about__me > h3 {
    font-size: 28px;
    font-weight: 500;

}
.home > .about__me > h1, #home > .about__me > h3  {
    font-style: normal;
    line-height: 42px;
    letter-spacing: 0.115em;

}
.home > .about__me p {
    font-weight: 100;
    font-size: 22px;
    padding: 2rem;
}
.reversed_link {
    margin: 20px 0 0;
    font-size: 36px;
    font-weight: 900;
    color: #DB5461;
}
.reversed_link:hover {
    color: white;
    transition: all 0.5s ease-in-out;
}
</style>