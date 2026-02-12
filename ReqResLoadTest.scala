package computerdatabase

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class ReqResLoadTest extends Simulation {

  val httpProtocol = http
    .baseUrl("https://reqres.in") // target API
    .acceptHeader("application/json")

  val scn = scenario("ReqResLoadTest")
    .exec(
      http("Get Users")
        .get("/api/users")
        .check(status.is(200))
    )
    .pause(1, 5) // pause 1-5 sec random

  setUp(
    scn.inject(
      rampUsers(50) during (30.seconds),    // ramp-up load
      constantUsersPerSec(20) during (1.minute) // stable load
    ).protocols(httpProtocol)
  )
}
