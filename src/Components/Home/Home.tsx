import { Button } from "@material-ui/core";
import Logo from "./Logo/Logo";
import "./Home.css";
function HomePage(): JSX.Element {
    return (
        <div className="main">
            <div>
                <Logo></Logo>
                <p  className="HomePage">
                    <br></br>
                    בישראל, כמו בעולם המערבי כולו, העומס על מערך האשפוז בבית החולים גדל והולך. <br></br>הצפיפות הרבה, הלחץ בו נתונים הצוותים הרפואיים וההמולה התמידית בחדרי המיון ובמחלקות האשפוז, יוצרים במקרים רבים תחושות של בדידות וניכור בקרב המאושפזים, בעיקר בגילאים המבוגרים. האווירה והתנאים הללו מקשים על המטופל בהתמודדות עם המחלה וגוזלים ממנו כוחות ומשאבים נפשיים הנדרשים לשם ההחלמה. כתוצאה מכך, גם בני המשפחה והמטפלים העיקריים חשים בעומס ובקשיים שאינם קשורים ישירות לטיפול בחולה שזקוק להם.

אשפוז בית מעניק לחולים רבים את התנאים האופטימליים להחלמה, שיקום, השגחה וקבלת טיפול רפואי מתמשך. באשפוז הביתי מקבלים החולים את המעטפת הטיפולית הנחוצה להם בסביבה נעימה, חמה ומוכרת , והאשפוז בבית חולים, נמנע.

האשפוז הביתי מבטיח לחולה קבלת טיפול רפואי צמוד ומותאם בדיוק לצרכיו,<br></br> ומפחית בצורה ניכרת את הסיכון המשמעותי הכרוך בשהות בבתי החולים – חשיפה לזיהומים.

החולה ובני משפחתו מפיקים יתרונות נפשיים ובריאותיים רבים מהישארות בבית, בסביבה הטבעית, וסיכויי ההחלמה משתפרים ועולים.

אשפוז בית של שרן כולל ליווי וטיפול רפואי מקצועי המנוהל על ידי צוות של רופא/ה ואח/ות ואנשי מקצוע רפואיים ופרא-רפואיים נוספים לפי הצורך. הצוות המקצועי מבקר מדי יום בבית המטופל ומספק מענה טלפוני לשאלות רפואיות 24/7.
<br></br>
אשפוז בית חלופה מצוינת, נוחה ובטוחה לאשפוז בבית החולים
איתור המטופלים המתאימים לאשפוז בית נערך על ידי הגורמים המקצועיים בקופות החולים (רופאי משפחה, היחידה לטיפולי בית, מוקדים והצוותים בבתי החולים) לאחר שביצעו הערכה לבדיקת התאמת המטופל לאשפוז ביתי.

ההתאמה מתבססת על מדדים קליניים קבועים, וכמובן – על רצונו ונכונותו של המטופל לקבל  בבית טיפול רפואי.

עם השיבה הביתה, תוך זמן קצר יתואם מועד הביקור הראשון של הצוות הרפואי לקליטת המטופל למערך אשפוז הבית של שרן.

<br></br>במהלך הביקור ייבדק המטופל, ייקבעו יעדים, יסומנו צרכים רפואיים ותוכנית הטיפול תצא לדרך.

עלות השירות
שירות אשפוז עד הבית ניתן ללא עלות לחברי קופות החולים שבהסדר .

עבור מאושפזים אחרים, השירות זמין גם באופן פרטי.

למי מתאים אשפוז בית?
למטופלים לאחר פרוצדורות רפואיות וניתוחיות שונות.
טיפול במקרים של החמרה במחלות כרוניות, כגון במקרה של זיהום או התייבשות על רקע המחלה הקיימת.
                </p>

                <Button id="button" variant="contained" href="/Information">
                   איך זה עובד? 
                </Button>

            </div >
        </div>
    );
}

export default HomePage;
