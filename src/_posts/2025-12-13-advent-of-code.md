---
layout: post
title:  "Advent of Code Day 1"
date:   2025-12-13 19:55:51 -0600
categories: updates programming
---

I should start out with some introduction to this website. The reality is that this will likely turn into yet another experiment that I'll drop when the next idea arises. That said, there's a small chance that this will turn into my personal website.

I started the [2025 Advent of Code](https://adventofcode.com/) today. No committment to actually finish, but I might. For now, I'm starting with Ruby to see if I can actually get profiency with it.

Here is my working submission for Day 1, part 1:

```ruby
dial = Array.new(100) { |i| i }
zero_count = 0
index = 50
zero_count = 0

File.read("input.txt").split("\n").each do |line|

  if line[0] == "L"
    (1..line[1..line.length].to_i).each do
      index - 1 < 0 ? index = 99 : index -= 1
    end
  else
    (1..line[1..line.length].to_i).each do
      index + 1 > 99 ? index = 0 : index += 1
    end
  end

  zero_count+= 1 if index == 0

  puts "- The dial is rotated #{line} to point at #{index}"
end

puts "the secret code is #{zero_count}"
```


<br />

My guess is that this is likely not that efficient. I bet you can do some conditionals and simple math and make this way faster.

Here is the second part for Day 1. This was quite easy given how I'd done part 1.

```ruby
dial = Array.new(100) { |i| i }
zero_count = 0
index = 50
zero_count = 0

File.read("input.txt").split("\n").each do |line|

  if line[0] == "L"
    (1..line[1..line.length].to_i).each do
      index - 1 < 0 ? index = 99 : index -= 1
      zero_count+= 1 if index == 0
    end
  else
    (1..line[1..line.length].to_i).each do
      index + 1 > 99 ? index = 0 : index += 1
      zero_count += 1 if index == 0
    end
  end

  puts "- The dial is rotated #{line} to point at #{index}"
end

puts "the secret code is #{zero_count}"
```
```
```


<br />
Here is the badge I now have. I'm so proud. This is actually the one after finishing Day 2, part 1, as well.

![Day 2 Part 1 Badge](/images/advent_of_code_day_2_part_1_badge.jpg)

<br />
Knowing me, this could be the last time this site is updated. Actually, I already did part 1 of Day 2. Minimally, I'll share that shortly.
