//  const Stripe = require("stripe")

// const STRIPE_KEY = process.env.STRIPE_KEY
// const stripe = new Stripe(STRIPE_KEY, {
//   apiVersion: "2022-08-01"
// }
// )

// const useStripe = async (req, res) => {
//   const { name } = req.body
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: 500,
//       courrency: "usd",
//       metadata: { name },
//       payment_method_cards: ["card"]
//     })
//     const clientSecret = paymentIntent.client_secret
//     res.json({ message: "Payment initiated", clientSecret })
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ messate: "Internal server error" })

//   }


// }
// module.exports = { useStripe }
// const STRIPE_KEY = process.env.STRIPE_KEY
// const stripe = new Stripe(STRIPE_KEY,{
//   apiVersion : "07-11-2022"
//  }
// )

// const useStripe = async(req,res) => {
//   const {name} = req.body
//            try {
//          const paymentIntent = await stripe.paymentIntents.create({
//            amount : 500,
//            courrency :"usd",
//            metadata: {name},
//            payment_method_cards: ["card"]
//          })
//          const clientSecret = paymentIntent.client_secret
//          res.json({ message: "Payment initiated", clientSecret})
//         } catch (error) {
//          console.log(error)
//          res.status(500).json({messate : "Internal server error"})
         
//         } 
             

// }
// module.exports = {useStripe}

