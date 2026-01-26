import { Card, CardContent, CardDescription, CardHeader } from "@/shared/ui/card";
import { StarIcon } from "@/shared/icons";

const REVIEWS = [
  {
    rating: 5,
    comment: "교수님 차량과의 교통사고 후 과실 비율이 궁금했는데, Acci가 자세하고 정확하게 사고를 분석해주어서 큰 도움이 되었습니다.",
    name: "성*준",
    age: "20대 남자",
  },
  {
    rating: 5,
    comment: "보험사의 과실 비율 판정 기다리기 힘들었는데, Acci 덕분에 빠르게 대응할 수 있었어요. ",
    name: "정*환",
    age: "20대 남자",
  },
  {
    rating: 5,
    comment: "제가 겪은 상황과 비슷한 판례들을 알 수 있어서 좋았어요",
    name: "유*영",
    age: "20대 여자",
  },
];

export function ReviewsSection() {
  return (
    <section className="container mx-auto px-4 sm:px-10 max-w-7xl">
      <div className="text-center mb-6">
        <h2 className="text-title4 sm:text-title2 mb-2 text-gray-900">사용자 후기</h2>
        <p className="text-body8 sm:text-body4 text-gray-500">실제 사용자들의 생생한 경험담을 확인해보세요</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {REVIEWS.map((review, index) => (
          <Card key={index} className={index === 2 ? "sm:col-span-2 md:col-span-1" : ""}>
            <CardHeader>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <CardDescription className="sm:min-h-28 text-body8 sm:text-body4">{review.comment}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#d9d9d9] flex items-center justify-center text-lg">{/* 프사가 들어가면 되지 않을까...? */}</div>
                <div>
                  <p className="text-body5">{review.name}</p>
                  <p className="text-body8 text-muted-foreground">{review.age}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
