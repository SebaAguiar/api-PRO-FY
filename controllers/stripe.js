const Stripe = require("stripe")

const STRIPE_KEY = process.env.STRIPE_KEY
const stripe = new Stripe(STRIPE_KEY, {
  apiVersion: "2022-08-01"
}
)

const useStripeUsersBasic = async (req, res) => {
  const { email, id } = req.body
 console.log(email)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 50,
      currency: "usd",
      payment_method_types: ["card"]
    })
    
    const clientSecret = paymentIntent.client_secret
    res.json({ message: "Bienvenido al plan básico", clientSecret, "email" : email})


    

  } catch (error) {
    console.log(error)
    res.status(500).json({ messate: "Internal server error" })

  }


}
const useStripeUsersPremium = async (req, res) => {
  const { email } = req.body
 console.log(email)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
      payment_method_types: ["card"]
    })
    
    const clientSecret = paymentIntent.client_secret
    res.json({ message: "Bienvenido al plan Premium", clientSecret, "email" : email})
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ messate: "Internal server error" })
  }
}


const useStripeProfessionalsBasic = async (req, res) => {
  const { email } = req.body
 console.log(email)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 50,
      currency: "usd",
      payment_method_types: ["card"]
    })
    
    const clientSecret = paymentIntent.client_secret
    res.json({ message: "Bienvenido al plan Básico", clientSecret, "email" : email})
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ messate: "Internal server error" })

  }


}

const useStripeProfessionalsPremium = async (req, res) => {
  const { email } = req.body
 console.log(email)
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
      payment_method_types: ["card"]
    })
    
    const clientSecret = paymentIntent.client_secret
    res.json({ message: "Bienvenido al plan Premium", clientSecret, "email" : email})
    

  } catch (error) {
    console.log(error)
    res.status(500).json({ messate: "Internal server error" })

  }


}




module.exports = { useStripeUsersBasic,useStripeUsersPremium, useStripeProfessionalsBasic,
  useStripeProfessionalsPremium}