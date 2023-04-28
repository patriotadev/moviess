<template>
  <div class="main-page">
    <div v-if="isModalOpen">
      <div id="modal">
      <div id="modal-container">
          <div class="modal-header">
            <h2>{{ movieDetail.Title }}</h2>
            <span @click="isModalOpen = false">X</span>
          </div>
            <hr/>
          <div class="modal-body">
              <img :src="movieDetail.Poster" alt="Movie Images" /> 
              <div class="description">
                <p>Title : {{movieDetail.Title}}</p>
                <p>Release Year : {{movieDetail.Year}}</p>
                <p>Type : {{movieDetail.Type}}</p>
              </div>
          </div>
          <div class="modal-footer">
            <button id="modal-submit-button" @click="isModalOpen = false">Close</button>      
        </div>
      </div>
    </div>
    </div>
    <div id="page-title">
      <h1><span>!</span>Moviess</h1>
        <p @click="signOut">Sign out</p>
    </div>
    <div id="search-container">
      <input id="search-input" ref="search" placeholder="Search movies..." v-model="searchInput" @keyup.enter="handleFetchMovies" />
      <button @click="handleFetchMovies" id="search-button">Search</button>
    </div>
    <h2 id="list-title" v-if="isSearch">Search result for "{{ searchInput }}"</h2>
    <div v-if="movieList" class="movie-container">
    <li v-for="(movie, index) in movieList" :key="index">
      <MovieCard @click="handleShowModal(movie)" :movie="movie"/>
    </li>
    </div>
    <div v-else>
      <h2>Movie not found.</h2>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import MovieCard from '../components/MovieCard.vue';

export default {
  name: 'MainPage',
  data () {
    return {
      searchInput: '',
      movieList: [],
      movieDetail: {},
      isSearch: false,
      isModalOpen: false,
    }
  },
  components: {
    MovieCard
  },
  methods: {

    handleShowModal(movie) {
      this.movieDetail = movie;
      this.isModalOpen = true;
    },

    handleFetchMovies() {
      axios.get(`https://www.omdbapi.com/?apikey=1874392a&s=${this.searchInput}`)
      .then((response) => {
        this.movieList = response.data.Search;
        this.$refs.search.value = '';
        this.isSearch = true;
        })
      .catch((error) => {
        console.log(error)
      })
    },

    signOut () {
        localStorage.removeItem('user');
        this.$router.push({path: '/signin'});
    }
  },
  mounted () {
      if (!localStorage.getItem('user')) {
        this.$router.push('/signin');
      }
      axios.get(`https://www.omdbapi.com/?apikey=1874392a&s=all`)
      .then((response) => {
        this.movieList = response.data.Search;
        })
      .catch((error) => {
        console.log(error)
      })
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#page-title {
  color: lightgray;
  font-size: 1.2rem;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: #1f2937;
  z-index: 999;
}

@media screen and (max-width: 600px) {
    #page-title {
        font-size: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }
    #page-title span {
        font-size: 1rem;
    }
}

#page-title span {
  color: #f59e0b;
  font-size: 2.5rem;
}

#page-title p {
  color: lightgray;
  margin-left: 300px;
  cursor: pointer;
}

.main-page {
  margin: 0;
  padding-top: 120px;
  padding-bottom: 100px;
}

#search-container {
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 12px;
}

#search-input {
  width: 50%;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 32px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 8px;
}

#search-input:focus {
  outline: none;
}

#search-button {
  height: 40px;
  width: 80px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #f59e0b;
  color: white;
  font-weight: bold;
}

#list-title {
  color: lightgray;
}

.movie-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

#modal {
  position: fixed;
  background-color: white;
  z-index: 9999;
  width: 50%;
  height: 60vh;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-radius: 8px;
  border: 4px dotted #f59e0b
}

@media screen and (max-width: 1150px) {
   #modal {
    width: 90%;
   }
}

#modal-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.modal-header {
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
}

.modal-body {
    display: flex;
    justify-content: flex-start;
    padding: 0px 40px;
    flex: 2;
    gap: 40px;
    margin-top: 20px;
}

.modal-body img {
    width: 300px;
    height: 400px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px;
}

.modal-body .description {
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: bold;
}

#modal-submit-button {
  height: 40px;
  width: 80px;
  outline: none;
  border: none;
  border-radius: 8px;
  background-color: #1f2937;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

</style>
