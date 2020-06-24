---
layout: default
---

<section class="hero is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Resources
      </h1>
      <h2 class="subtitle">
        From workshop slides to python guides
      </h2>
    </div>
  </div>
</section>

<br><br>
<div class="container is-fluid">
    <div class='columns'>
        <div class='column is-2'>
        <p>Tags</p>
        </div>
        <div class='column is-10'>
            <div class="field is-horizontal is-left">
                <div class = "field-label is-normal is-left">
                    <label class = "label" for="searchBox">Search</label>
                </div>
                <div class = "field-body">
                    <div class = "field">
                    <p class = "control is-pulled-left">
                        <input class="input" id="searchBox" type = "text" placeholder="Search terms...">
                    </p>
                    </div>
                </div>
            </div>
            <div class='columns is-multiline is-centered'>
                {% for resource in site.data.resources %}
                <div class='column is-4 search'>
                    <div class='card'>
                        <div class='card-content'>
                            <p class='title is-4'>{{ resource.title }}</p>
                            <div class='content'>
                                <p>{{ resource.description }}</p>
                            </div>
                            <!--resources button-->
                            {% if resource.resources %}
                            <div class="dropdown is-hoverable">
                            <div class="dropdown-trigger" >
                                    <button class="button is-info">
                                        <span>View Resources</span>
                                    </button>
                                </div>
                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                    {% for link in resource.resources %}
                                        <a href="{{ link.path }}" class="dropdown-item" target="_blank">
                                        {{ link.name }}
                                        </a>
                                    {% endfor %}
                                    </div>
                                </div>
                            </div>
                            {% else %}
                            <button class="button is-disabled">
                                <span>No Resources</span>
                            </button>
                            {% endif %}
                            <!--end button-->
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </div>
</div>

<link rel="stylesheet" href="/assets/css/paginate.css">

<script type='text/javascript' src='/assets/js/paginate.js'>
</script>





<!--<table class="table-borderless is-fullwidth  myTable">
    <tbody>
    {% for post in site.posts %}
    <tr>
        <td>
        {% if post.title != 404 %}
        <h2 class="title is-1 centered"><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {% if post.date %}<p> <i>Published {{ post.date | date_to_string }}</i></p>{% endif %}
        <br>
        <p>{{ post.excerpt }}</p>
        <br>
        <p><a href="{{ post.url }}"> ... Read more</a></p>
        <br>
        {% endif %}
        </td>
        {% if post.image %}
        <td>
        <span class="image main"><img src="{{ post.image }}" alt="" /></span>
        </td>
        {% endif %}
    </tr>
    {% endfor %}
    </tbody>
</table>-->

<script>

let resources = document.getElementsByClassName('search')
let search_box = document.getElementById('searchBox');
search_box.setAttribute("onkeyup","filter_search()")

function filter_search(word) {
    word = search_box.value;
    if (word == "") {

        for (let resource of resources) {
            resource.style.display = "";
        }

    } else {

        word = word.toLowerCase();
        for (let resource of resources) {
            let str = resource.getElementsByClassName('title')[0].innerText;
            str = str.toLowerCase();
            let pos = str.search(word);
            console.log(pos)
            if (pos == -1) {
                resource.style.display = "none";
            }
        }

    }
    
}

</script>

