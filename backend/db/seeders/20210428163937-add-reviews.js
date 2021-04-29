'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { description: 'I LOVE this necklace!!! It’s so beautiful and the customer service is just as AMAZING!!! Absolutely love love love this!! Everything from the necklace itself to the beautiful and detailed packaging is absolutely gorgeous!!! Thank you so much guys!!', score: 1, user_id: 2, listing_id: 1},
      { description: 'Exactly what I wanted and more!! Husband bought this for me for Valentine’s Day since I’m a soon to be Mama! It is so dainty and perfect! I never take it off! Will definitely purchase again from this shop! ❤️', score: 3, user_id: 2, listing_id: 1},
      { description: 'I am OBSESSED with this necklace. It’s so dainty and sparkly. My skin is so sensitive to jewelry and I usually break out wearing certain things. I haven’t had one issue. Definitely a great buy, especially with Mother’s Day coming up ❤️', score: 5, user_id: 6, listing_id: 1},
      { description: 'This necklace comes beautifully packaged! Haven’t had the necklace for long to speak on quality but instantly fell in love as it was everything I wanted; dainty and elegant. Perfect statement piece for a new mama!', score: 5, user_id: 4, listing_id: 1},
      { description: 'Love this necklace! I’ve waited a long time to be called “Mama” and this was the first thing I bought for myself ❤️', score: 5, user_id: 10, listing_id: 1},
      { description: "I ordered this necklace for a friend's birthday who just became a mom after a long time of waiting. It is super cute and I think she will love it! I liked it so much I ended up placing another order with CaitlynMinimalist for a custom order.", score: 5, user_id: 12, listing_id: 1},
      
      { description: "Absolutely gorgeous!!! So glad I found this seller!!! I have been looking for years for a mother's ring like this, only to find gaudy looking peices or ones that said mom all over it. I absolutely love my dainty peice of jewelry!! And the setting is so perfect! No prongs to get snagged on anything!! To say I'm in love with it is a huge understatement!! Thank you so much!", score: 5, user_id: 3, listing_id: 2},
      { description: "I bought 3 of these rings to gift to some good friends and I am so excited to give them! Beautiful rings, very dainty but feel solid. The yellow gold is a true yellow with no rosy tones, and the sterling silver is well...silver... The raised settings have flat stones in them so that you can't catch the stones on anything accidentally. The faceting in the stones is also very dynamic and looks ~luxe~ Really gorgeous rings in beautiful packaging with fast shipping. Great customer service too! When I had a sizing issue with my order, the seller was very quick to respond and help me out. Would definitely order again and would recommend this shop to anyone looking for minimalist quality jewelry.", score: 5, user_id: 5, listing_id: 2},
      { description: "There are some reallllly pricey dainty rings out there- and this one is so reasonable and it is ADORABLE. I ordered mine in 1 color for all 3 stones and I love it. I've noticed that the daintier the ring the more I should go down half a size. Seriously- do not hesitate. It is cute and worth every penny!", score: 5, user_id: 8, listing_id: 2},
      { description: "I love this ring. I got my husband, myself and my newborns birthstones! Once item was shipped, I received it in 3 days! The packaging was super cute. Ring fits well. I definitely recommend. Thank you!", score: 5, user_id: 11, listing_id: 2},
      { description: "I absolutely love this ring thank you. I have 4 kids 2 girls 2 boys. The boys were both born in april so I got this 3 stone ring with the diamond in the center for them then the girls on either side", score: 5, user_id: 6, listing_id: 2},

      { description: "Absolutely adore my necklace! I got the rose gold and gold circles with the name of my late baby girl and our newborn son. it's the perfect early birthday/mother's day gift, and I'll cherish it forever ♥️ The packaging was equally amazing, a lot of care has gone into these products.", score: 5, user_id: 9, listing_id: 3},
      { description: "Omg this necklace is absolutely gorgeous. I couldn't have bought a necklace this beautiful anywhere else. The craftsmanship is by far the best I've ever seen. Thank you so very much for my lovely necklace. I will wear it with pride and I will be back to buy more items from here!!", score: 5, user_id: 12, listing_id: 3},
      { description: "The charm is absolutely perfect. The necklace/chain is a brassy color and doesn’t compliment the charm well. The shipping left a lot to be desired but that was at no fault of Kate, the seller. USPS has been struggling for awhile. Overall I’m very happy with my purchase.", score: 4, user_id: 13, listing_id: 3},
      { description: "It’s beautiful. Exactly what I was hoping to get for my mom for Mother’s Day. I can’t wait to see her expression when she gets it! It’s was delivered much faster than expected.", score: 5, user_id: 2, listing_id: 3},
      { description: "Absolutely love these! I can't wait to wear them, but waiting to give my daughter one of the rings for Mothers Day, so I can't let her see these til then. They were just like I asked for them to be done!", score: 5, user_id: 10, listing_id: 3},

      { description: "I la-la-la-loooove my ring! It’s perfect! Thank you so much!!", score: 5, user_id: 4, listing_id: 4},
      { description: "I am torn about my review. The package that this ring came in is super professional and so cute. And the ring itself is also super cute. I had my son's name Tristen, and daughters name Baylie on the ring. Baylie turned out beautiful, but I can not read Tristens name. At first I thought it said Fisten, then Tisten, or also Tnstrn. It's very hard to make out the letters. It may be that I chose the wrong style of lettering, but I went with the recommended style. I will still wear it, cause I don't want to waste it, I just wish it was a little more legible. I still recommend this ring, just choose your letting wisely", score: 3, user_id: 7, listing_id: 4},
      { description: "In love with my ring, has a timeless yet elegant feel to it. Looked super cute on my finger.", score: 5, user_id: 13, listing_id: 4},
      { description: "I LOVE my ring so much. It is a Mother's Day gift to myself. I got both my kid's names in rose gold and I am so excited to wear this everyday! Thank you. :) It makes me so happy to look down and see it.", score: 5, user_id: 14, listing_id: 4},
      { description: "Seriously obsessed! I got my sons name, Carson at the top. And my nieces name, London at that bottom. Both who mean so much to me! And now I get to wear their names everyday! I love it! (Picture for attention and aesthetic) 🥺💛", score: 5, user_id: 2, listing_id: 4},

      { description: "It shipped on time but took a little longer to arrive than expected. I’m assuming because of Good Friday BUT once I received it and saw it it was totally worth the wait. The ring is just what I wanted. It’s beautiful and packaged so pretty and with care. I will definitely be ordering from this shop again. I am in love with my new ring!", score: 5, user_id: 4, listing_id: 5},
      { description: "it's more beautiful than I could have imagined. the only downside is the edges of the names are curved in so it puts pain on my finger so I don't wear it constantly but I do love the ring", score: 5, user_id: 2, listing_id: 5},
      { description: "Absolutely stunning work I have wanted personalized pieces for a while, and did a lot of shopping around. The pieces have far exceeded my expectations. They are perfect and I couldn’t be more happy with my ring!", score: 5, user_id: 7, listing_id: 5},
      { description: "I love my name ring! Its exactly what I wanted.", score: 5, user_id: 11, listing_id: 5},
      { description: "wow, wow! I'm soo pleased how this ring turned out! I have already ordered more! thank you!!", score: 5, user_id: 1, listing_id: 5},

      // { description: "sd", score: 5, user_id: 4, listing_id: 5},
      // { description: "sd", score: 5, user_id: 2, listing_id: 5},
      // { description: "sd", score: 5, user_id: 7, listing_id: 5},
      // { description: "sd", score: 5, user_id: 11, listing_id: 5},
      // { description: "sd", score: 5, user_id: 1, listing_id: 5},
      { description: "It shipped and arrived on time. But more importantly this seller truly customized and personalized this piece where other sellers I contacted about similar necklaces could not customize. First, I wanted a rose gold necklace with one silver circle for my mom who passed this time last year.. no problem. I mentioned in passing our astrological elements - but that I didn’t care as much about that as just the one silver circle. I was so excited to get it - I had sort of forgotten about the symbols. I put it on and was stoked. Loved it. Then I took a second look. And our tiny symbols are there... I cried. I’m so in love with this seller and this necklace.", score: 5, user_id: 4, listing_id: 5},
      { description: "If you want to watch your mother cry this is the perfect gift! I purchased the 3 interlocking loops in mixed for my mother for Christmas. Beautiful piece and it arrived quickly which is awesome. The only thing that I would say is clarification on what mixed means would be awesome. I assumed that I would get a ring with gold tone a ring with silver tone and a rose gold ring. The piece was entirely silver.", score: 5, user_id: 2, listing_id: 5},
      { description: "My mom passed away earlier this year and Kate’s jewelry is the perfect sentiment. I cried when I opened the box and saw the necklace inscribed with my mom and daughter’s names. It is beautiful and something I will always keep near and dear in my heart. Thank you Kate!!", score: 5, user_id: 7, listing_id: 5},
      { description: "The perfect touch to an important day", score: 5, user_id: 11, listing_id: 5},
      { description: "Caitlyn Minimalist was wonderful in helping me create a custom necklace that I had wanted. The pendants itself ended up being a bit larger than I had wanted since I wanted it to be on the dainty side. I had also wanted to see the finished product before it shipped but I do understand turnaround times and that the request could have slipped through the cracks. The necklace is very well made with quality feeling materials and came in very beautiful gift boxes.", score: 5, user_id: 1, listing_id: 5},


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
