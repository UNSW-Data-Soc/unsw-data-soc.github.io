---
layout: default
title: Welcome to DataSoc
---
<div class="pageloader"></div>
<div class="infraloader is-active"></div>        
<!-- Hero and Navbar -->
<div class="hero is-default is-bold">
    <!-- City_left and Welcome to DataSoc -->
    <div class="hero-body">
        <div class="container">
            <div class="columns is-vcentered">
                <div class="column is-7">
                    <figure class="">
                        <img src="/assets/images/illustrations/drawings/city_left.png">
                    </figure>
                </div>
                <div class="column is-5 is-hero-title">
                    <h2 class="subtitle is-4">
                        Welcome to
                    </h2>
                  <h1 class="title is-1 is-bigger">
                        DataSoc
                    </h1>
                    <h2 class="subtitle is-4">
                        University of New South Wales
                    </h2>
                    <p class="">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSffSdDlZLRMnWokOwlpKEVaaklL39nkgkjnZ0iaqdoL134nVA/viewform?usp=sf_link" class="button button-cta is-bold btn-align secondary-btn raised">
                            Join Us!
                        </a>
                    </p>
                    <div class="social-links pt-5">
                        {% for item in site.data.contact.Media %}
                        <a href="{{ item.link }}"><span class="icon has-text-dark"><i class="{{ item.img_class }}"></i></span></a>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="columns box">
            <div class="column is-8">
                <figure>
                    <img src="/assets/images/events/datathon-2019.jpg">
                </figure>
            </div>
            <div class="column is-4">
                <h4 class="title is-4"><i>Meet Friends.</i></h4>
                <h4 class="title is-4"><i>Get Skills.</i></h4>
                <h4 class="title is-4"><i>Network with Professionals.</i></h4>
            </div>
        </div>
        <div class="tile is-ancestor is-shadowless">
            <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white box">
                    <div class="content">
                        <h1 class="title is-2">DataBlog</h1>
                        {% for post in site.posts limit:1 %}
                        <p class="title is-4">{{ post.title }}</p>
                        <p class="subtitle"><i>{{ post.date | date_to_string }}</i></p>
                        <div class="content">
                            {{ post.excerpt }}
                            <a class="has-text-link" href="{{ post.url }}">Read more...</a>
                        </div>
                        {% endfor %}
                    </div>
                </article>
            </div>
            <div class="tile is-vertical is-8">
                <div class="tile is-parent is-shady">
                    <div class="tile is-child notification is-white box">
                        <div class="columns ">
                            <div class="column is-two-thirds">
                                <figure class="image">
                                    <img src="/assets/images/events/datathon_final.jpg">
                                </figure>
                            </div>
                            <div class="column">
                                <h4 class="title is-2"><i>Our Next Event</i></h4>
                                <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                                <p><a href="#">Learn more</a></p>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>