---
layout: default
sidebar: false
---

<ul class="post-list">
   {% for page in site.posts %}
          <li>
                <h2><a href="{{ site.baseurl }}{{ page.url }}" class="softbutton">  {{ page.title }}  </a></h2>
                {% include post-meta.html %}
                {{ page.excerpt | markdownify | truncatewords: 60 }}
          </li>
   {% endfor %}
</ul>
