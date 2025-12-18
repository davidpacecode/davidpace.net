---
layout: post
title:  "Advent of Code Day 2"
date:   2025-12-14 20:36:51 -0600
categories: tech advent_of_code
---

Still trying advent of code. I got Day 2, part 1, done on the first try.

```ruby
#!/home/dsp2/.local/share/mise/installs/ruby/3.3.4/bin/ruby

sum = 0

File.read("input.txt").split(",").each do |line|

  (line.split('-')[0].to_i..line.split('-')[1].to_i).each do |num|
    if num.to_s.length.even?
      if num.to_s[0 .. num.to_s.length/2 - 1] == num.to_s[num.to_s.length/2 .. num.to_s.length - 1]
        sum += num
      end
    end
  end
end

puts "the sum is #{sum}"
```


<br />
Part 2 seems WAY harder....
