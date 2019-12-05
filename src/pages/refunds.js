import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Heading, Text, Anchor, Box } from "grommet"

const RefundsPage = () => (
  <Layout>
    <SEO title="Refunds" />
    <Box width="xlarge" pad="large">
      <Heading level={1}>Cancellation of Service </Heading>
      <Heading level={3}>Cancellation(if applicable)</Heading>

      <Text fill>
        Cancellation can be processed in a case-by-case basis and are to be done
        before the 30 day mark from the inception of the formal engagement. On
        an exceptional case basis we could however process the same for the
        entire duration of the service being rendered. No cancellations are
        entertained once the service period is complete or the engagement is
        deemed complete by both parties and all deliverables have been given.
      </Text>
      <Heading level={3}>Refunds (if applicable)</Heading>

      <Text fill>
        Once your cancellation is received and inspected, we will send you an
        email to notify you that we have received your returned item. We will
        also notify you of the approval or rejection of your refund.
      </Text>
      <Text fill>
        If you are approved, then your refund will be processed, and a credit
        will automatically be applied to your credit card or original method of
        payment, within a 10 days.
      </Text>
      <Heading level={3}>Late or missing refunds (if applicable)</Heading>

      <Text fill>
        If you haven’t received a refund yet, first check your bank account
        again.
      </Text>
      <Text fill>
        Then contact your credit card company, it may take some time before your
        refund is officially posted.
      </Text>
      <Text fill>
        Next contact your bank. There is often some processing time before a
        refund is posted.
      </Text>
      <Text fill>
        If you’ve done all of this and you still have not received your refund
        yet, please contact us at contact@simbotix.com.
      </Text>

      <Heading level={3}>Sale items (if applicable)</Heading>

      <Text fill>
        Only regular priced items may be refunded, unfortunately sale items
        cannot be refunded.
      </Text>
      <Text fill>
        We reserve the right at any time to modify or discontinue the Service
        (or any part or content thereof) without notice at any time.
      </Text>
      <Text fill>
        We shall not be liable to you or to any third-party for any
        modification, price change, suspension or discontinuance of the Service.
      </Text>

      <Heading level={3}>Exchanges (if applicable)</Heading>

      <Text fill>
        We only replace items if they are defective or damaged. If you need to
        exchange it for the same item, send us an email at{" "}
        <Anchor href="mailto:contact@simbotix.com">contact@simbotix.com</Anchor>{" "}
        and send your item to:
        <strong>
          <br /> Simbotix Private Limited,
        </strong>
        <br /> Hno - 7-1-212/a/70,
        <br /> Shivbagh, Ameerpet,
        <br /> Hyderabad, Telangana, India,
        <br />
        500016
      </Text>
      <Heading level={3}>Gifts</Heading>

      <Text fill>
        If the item was marked as a gift when purchased and shipped directly to
        you, you’ll receive a gift credit for the value of your return. Once the
        returned item is received, a gift certificate will be mailed to you.
      </Text>
      <Text fill>
        If the item wasn’t marked as a gift when purchased, or the gift giver
        had the order shipped to themselves to give to you later, we will send a
        refund to the gift giver and he will find out about your return.
      </Text>
      <Heading level={3}>Shipping</Heading>
      <Text fill>
        To return your product, you should mail your product to:
        <strong>
          <br /> Simbotix Private Limited,
        </strong>
        <br /> Hno - 7-1-212/a/70,
        <br /> Shivbagh, Ameerpet,
        <br /> Hyderabad, Telangana, India,
        <br />
        500016
      </Text>
      <Text fill>
        You will be responsible for paying for your own shipping costs for
        returning your item. Shipping costs are non-refundable. If you receive a
        refund, the cost of return shipping will be deducted from your refund.
      </Text>
      <Text fill>
        Depending on where you live, the time it may take for your exchanged
        product to reach you, may vary.
      </Text>
    </Box>
  </Layout>
)

export default RefundsPage
