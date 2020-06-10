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
    <div class='columns is-multiline is-centered'>
        {% for resource in site.data.resources %}
        <div class='column is-3'>
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

