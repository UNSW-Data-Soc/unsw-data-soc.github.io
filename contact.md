---
layout: landing
title: Contact Us
title-image: city3_left.png
introduction: |
    Hi!
    <br><br>
    Do you have a question? Something on your mind? <i>Homework help?</i>
    <br><br>
    Homework help isn't really our thing, but if you've got something to ask or you're looking for even more information about us, check below!
    <br><br>
    All our social media links are down below too so be sure to check them out as well!
---

<!-- details -->
<div class="hero-body">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column is-6">
                <p>
                    <b>Email:</b> <a href="mailto:{{ site.data.contact.Email }}">{{ site.data.contact.Email }}</a>
                    <br><br>
                    <b>Deliveries:</b><br>
                    {% assign address = site.data.contact.Deliveries | split: ", " %}
                    {% for field in address %}
                        {{ field }}
                        <br>
                    {% endfor %}
                    <br>
                    <b>Constitution: </b><a href="{{ site.data.contact.Constitution }}"> Link </a>
                </p>
            </div>
            <div class="column is-5 is-offset-1">
                <figure>
                <img src="/assets/images/illustrations/drawings/city_right.png">
                </figure>
            </div>
        </div>
    </div>
</div>