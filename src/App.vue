<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <!-- <button class="btn btn-info" @click="testCall">Fetch</button> -->
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" value="Username" v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" value="Email" v-model="user.email">
                </div>
                <button class="btn btn-info" @click="submit">Submit</button>
                <hr>
                <br>
                <button class="btn btn-primary" @click="fetchData">Get data</button>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{u.username}} - {{u.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                user: {
                    username: "",
                    email: ""
                },
                users: []
            }
        },
        methods: {
            submit() {
                console.log(this.user.username);
                axios.post('data.json', {
                    username: this.user.username,
                    email: this.user.email
                }).then(response => {
                    console.log('Request has been sent');
                    console.log(`Response: `);
                    console.log(response);
                }).catch(error => {
                    console.log(`Error: `);
                    console.log(error);
                });
            },
            fetchData() {
                axios.get('data.json', {
                    responseType: 'json'
                })
                .then(response => {
                    console.log(response);
                    let resultArr = [];
                    for(let property in response.data) {
                        resultArr.push(response.data[property]);
                    }
                    this.users = resultArr;
                    
                });
            }
        }
    }
</script>

<style>
</style>
