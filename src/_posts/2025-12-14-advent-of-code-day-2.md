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

Part 2 was harder and took me a while. My code got pretty messy and I struggled until I started over. Went quickly after that.

```ruby

#!/home/dsp2/.local/share/mise/installs/ruby/3.3.4/bin/ruby

def is_repeating? (sub_str, str)

  temp_str = ""
  reps = str.length / sub_str.length

  reps.times do
    temp_str = temp_str.concat(sub_str)
  end

  temp_str == str ? true : false
end

def made_of_repeating_str? (str)

  
  (str.length/2 - 1).downto(0).each do |i|
    return true if is_repeating?(str[0..i],str)
  end

  false
end

sum = 0

File.read("input_part_2.txt").split(',').each do |line|

  (line.split('-')[0].to_i..line.split('-')[1].to_i).each do |num|
    sum += num if made_of_repeating_str?(num.to_s)
  end
end

puts "sum: #{sum}"
```

Here is the resulting badge (...actually had also finished Day 3 Part 1 at this time...)

![AOC Day 2 Part 2](/images/advent_of_code_day_2_part_2_badge.png)
