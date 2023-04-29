<template>
    <div @click="isModalOpen = true" id="movie-card">
        <img :src="movie.Poster" alt="Movie Images" />
        <h3>{{movie.Title}}</h3>
        <p>Release Year : {{movie.Year}}</p>
    </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
};
</script>

<style scoped>
    #movie-card {
        display: flex;
        padding: 16px;
        margin: 10px;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: start;
        width: 300px;
        height: 450px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 2px 2px 2px lightgray;
        transition: 0.2s ease-in-out;
    }

    #movie-card:hover {
        cursor: pointer;
        filter: brightness(0.8);
        transform: translateY(-10px);
    }

    #movie-card img {
        width: 100%;
        height: 65%;
    }

    #movie-card p {
        font-size: 0.8rem;
        font-weight: bold;
    }
</style>
