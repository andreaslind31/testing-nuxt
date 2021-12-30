<template>
  <div>
    <main class='home'>
        <div class="about__me">
            <img src="~/assets/jpg/IMG_3355.JPG" alt="me" />
            <h1><nuxt-link to="/aboutme" class="reversed_link"> Andreas Lind </nuxt-link></h1>
            <h3>.NET student</h3>
            <p>A father and a well-structured developer student with years of experience <br>from the Swedish Armed Forces.</p>
            <div class="skills_projects_link">
                <h3><nuxt-link to="/projectlist"> Projects | Skills </nuxt-link></h3>
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
    margin-top: 1%;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4%;
}
.about__me {
    text-align: center;
    width: 80%;
    line-height: 1.5rem;
}
h1 {
    margin: 20px 0 0;
    font-size: 36px;
    font-weight: 900;
    color: #DB5461;
}
h3 {
    font-size: 28px;
    font-weight: 500;

}
h1, h3  {
    font-style: normal;
    line-height: 42px;
    letter-spacing: 0.115em;

}
p {
    font-weight: 100;
    font-size: 22px;
    padding: 2rem;
}
img {
    margin-top: 0.5%;
    width:80%;
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
.skills_projects_link {
    position: relative;
    color: white;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
}
.skills_projects_link:hover {
    color: #DB5461;
    transition: all 0.5s ease-in-out;
}
.skills_projects_link:hover::after {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    margin: auto;
    text-align: center;
    content: "";
    width: 160px;
    height: 2px;
    background-color: #DB5461;
    transition: background-color 0.5s ease-in-out;

}
</style>