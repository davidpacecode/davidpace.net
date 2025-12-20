---
# Feel free to add content and custom Front Matter to this file.

layout: default
---

<!---
<ul>
  <% collections.posts.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>
-->

<div class="wa-stack wa-gap-2xl" style="max-width: 60ch; margin: 0 auto;">
  <div class="wa-split">
    <h2 class="wa-heading-l">Palaver</h2>
    <span class="wa-cluster">
      <wa-icon name="search"></wa-icon>
      <a href="#" class="wa-link-plain">...coming soon?</a>
    </span>
  </div>

  <% collections.posts.each do |post| %>
    <%= render "post_listing", post: post %>
  <% end %>
</div>

