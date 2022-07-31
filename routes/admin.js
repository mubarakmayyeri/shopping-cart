var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name: "Embraer Praetor 500",
      category: "Aircraft",
      description: "Immaculate Condition. Like New One Owner Since New- Low Hours Always Hangared ADS-B Out | FANS 1A+ | CPDLC",
      image: "https://robbreport.com/wp-content/uploads/2020/07/lead-20180913_prztq_cc4_7254-720x479-99f28fb3-d60d-4837-90df-9515eaf3f579.jpg?w=720"
    },
    {
      name: "Dassualt Falcon 7X",
      category: "Aircraft",
      description: "EASy II+ - Cert. 4: WAAS-LPV; ADS-B Out; SVS; ADM; Dual Jepp. Charts; CPDLC FANS 1/A+ & ATN B1: Push-to Load Functionality",
      image: "https://cdn.avbuyer.com/live/uploads/image/364701_364800/aircraft-private-jets-dassault-falcon-7x-364777_c23d8dc909300f27_350X200_c.webp"
    },
    {
      name: "Cessna Citation VII",
      category: "Aircraft",
      description: "Fully Enrolled on Program 8 + 1 PAX Configuration No Damage History Always Hangered at Home Base Extremely Well Maintained",
      image: "https://cdn.avbuyer.com/live/uploads/image/365001_365100/aircraft-private-jets-cessna-citation-vii-365020_b714448fc1033182_350X200_c.webp"
    },
    {
      name: "Bombardier Challenger 605",
      category: "Aircraft",
      description: " Part 135 Equipped, Never Chartered. Equipped with Crew Force Measuring. Pro Line 21 Advanced. US Registered. Extended Cabin Configuration. Engines on GE",
      image: "https://cdn.avbuyer.com/live/uploads/image/365001_365100/aircraft-private-jets-bombardier-challenger-605-365019_96a5e1afae73a4ea_350X200_c.webp"
    },

  ]
  res.render('admin/view-products',{admin: true, products});
});

router.get('/add-product',(req,res)=>{
  res.render('admin/add-product')
})

router.post('/add-product',(req,res)=>{
  console.log(req.body)
  console.log(req.files.Image)
})

module.exports = router;
